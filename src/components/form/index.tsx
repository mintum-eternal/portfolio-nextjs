import {
  ReactNode,
  useEffect,
  useRef,
} from "react";

function Form({
  render,
}: {
  render: () => ReactNode;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const formElement = formRef.current?.elements;
    if (formElement) {
      const formData: Record<string, unknown> =
        {};
      Array.from({
        length: formElement.length,
      }).forEach((element, idx) => {
        const current = formElement.item(idx);
        if (current) {
          switch (current.tagName) {
            case "INPUT":
            case "TEXTAREA":
              const input =
                current as HTMLInputElement;
              formData[input.name] = input.value;
              break;

            default:
              const select =
                current as HTMLSelectElement;
              console.log(select.options, select.value);
              break;
          }
        }
      });
      // console.log("formData", formData);
    }
  }, []);
  return <form ref={formRef}>{render()}</form>;
}

export default Form;
