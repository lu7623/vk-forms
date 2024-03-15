import { Button, FormItem, Textarea } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import getCatFact from "../../api/catfact";
import { useEffect, useRef, useState } from "react";

export default function CatfactForm() {
  const [facts, setFacts] = useState("");
  const [position, setPosition] = useState(0);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = async () => {
    const fact = await getCatFact();
    if (fact) {
      setFacts(fact);
      let pos = fact.trim().split(" ")[0].length;
      setPosition(pos);
    }
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
      textRef.current.selectionStart = position;
      textRef.current.selectionEnd = position;
    }
  }, [facts, position]);

  return (
    <>
      <div>
        <Button
          align="center"
          appearance="positive"
          rounded
          size="l"
          onClick={handleClick}
        >
          Click me
        </Button>
      </div>
      <div style={{ width: "800px" }}>
        <FormItem>
          <Textarea value={facts} getRef={textRef} />
        </FormItem>
      </div>
    </>
  );
}
