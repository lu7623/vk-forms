import { Button, FormItem, Textarea } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import getCatFact from "../../api/catfact";
import {  useEffect, useRef, useState } from "react";

export default function CatfactForm() {
  const [facts, setFacts] = useState('');

  const handleClick = async () => {
    const fact = await getCatFact();
    if (fact) {
      setFacts(fact);
      let pos =fact.trim().split(' ')[0].length
      setPosition(pos);
      console.log(pos);
    
    }
  }
  
  const [position, setPosition] = useState(0);
 
  const textRef = useRef<HTMLTextAreaElement>(null);
  
 

  useEffect(() => {
  
    if (textRef.current) {
    textRef.current.focus()
    textRef.current.selectionStart = position;
    textRef.current.selectionEnd = position;
    console.log(textRef.current.selectionStart)
            console.log('position', position);
 }
  }, [facts,position]);

  return (
    <>
      <div>
        <Button
          align="center"
          appearance="negative"
          rounded
          stretched={false}
          onClick={handleClick}
        >
          Click me
        </Button>
      </div>
      <div style={{width: '1000px'}}>
      <FormItem >
          <Textarea  value={facts} getRef={textRef} onChange={handleClick}/>
        </FormItem>
        </div>
    </>
  );
}
