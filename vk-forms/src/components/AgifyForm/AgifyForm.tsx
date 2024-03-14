import {
  Button,
  FormItem,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import {  useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import getAgeByName from "../../api/agify";

export interface IFormInput {
  name: string;
}

export default function AgifyForm() {
  const [age, setAge] = useState(0);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter a name')
      .matches(
        /^[a-zA-Z]+$/,
        "Name can only contain letters."
      )
  });
  const {
    register,
    formState,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await getAgeByName(data.name);
    if (res) setAge(res)
  };
  return (
    <>
    
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem>
            <input style={{lineHeight: "20px",
  fontSize: "16px", padding:'12px', borderRadius: '5px'}}
              id="name"
              placeholder="Enter a name"
              {...register("name")}
            />
            {errors.name && (
              <p>
                {errors.name.message}
              </p>
            )}
            <Button type="submit" appearance="positive" disabled={!formState.isValid} size="m">
              Submit
            </Button>
          </FormItem>
      </form>
      <div>
        <p>Age: <span>{ age}</span> </p>
      </div>
    </>
  );
}
