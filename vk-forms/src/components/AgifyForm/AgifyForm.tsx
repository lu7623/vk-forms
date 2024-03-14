import { Button, FormItem, Input } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { useEffect, useReducer, useState } from "react";
import getAgeByName from "../../api/agify";
import { initialState, reducer } from "./reducer";


export default function AgifyForm() {
  const [age, setAge] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [repeat, setRepeat] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors]=useState('')


  const getAge = async (name: string) => {
    const alreadyAsked = state.find((man) => man.name === name);
    if (!alreadyAsked) {
      const res = await getAgeByName(name);
      setRepeat("");
      if (res) {
        setAge(res);

        dispatch({ type: "addName", payload: { name: name, age: res } });
      } else {
      }
    } else {
      const res = alreadyAsked.age;
      setAge(res);
      setRepeat("You already asked about this guy");
    }
  };

  const validate = (str: string) => {
    if (str.length===0) {
      setIsValid(false);
      setErrors("Please enter a name");
      return false
    }
    else if (!str.match(/^[a-zA-Z]+$/)) {
      setIsValid(false);
      setErrors("Name should only contain letters");
      return false
    }
    else {
      setIsValid(true);
      setErrors('')
      return true
    }
  }
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
    isValid &&  getAge(searchTerm);
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   getAge(searchTerm) 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Input
            onChange={(e) => {
              validate(e.target.value)
              setSearchTerm(e.target.value)
            }} 
            value={searchTerm} 
            name='manName'
            required
          />
        </FormItem>
        <FormItem>
          <Button
            type="submit"
            appearance="positive"
            size="m"
            disabled={!isValid}
          >
            Submit
          </Button>
        </FormItem>
      </form>
      {errors.length > 0 && <p>{ errors}</p>}
      <div>
        {repeat.length > 0 && <p>{repeat}</p>}
        <p>
          Age: <span>{age}</span>{" "}
        </p>
      </div>
    </>
  );
}
