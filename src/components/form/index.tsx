import {
  BaseSyntheticEvent,
  ChangeEvent,
  createContext,
  FormEvent,
  ReactNode,
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
export interface IFormContext {
  setValue: (name: string, value: any) => void;
  getValue: (name?: string) => void;
}
const ContextForm = createContext<
  IFormContext | undefined
>(undefined);
export const useFormContext = () =>
  useContext(ContextForm);

function Form({
  render,
}: {
  render: (value: IFormContext) => ReactNode;
}) {
  const [contextValue, setContextValue] =
    useState({});
  const [formData, setFormData] = useState<Record<string, unknown>>({})
  const formRef = useRef<HTMLFormElement>(null);
  const handleSetValue = (name: string, value: unknown) => {
    const newData = {[name]: value}
    setFormData(s=>({...s, ...newData}))
  };
  const handleOnChange = (e: ChangeEvent<HTMLFormElement>) => {
    const newData = {[e.target.name]: e.target.value}
    setFormData(s=>({...s, ...newData}))
  }
  const handleGetValue = (name?: string) => {
    return name ? formData[name] : formData
  };
  useEffect(() => {
    const formElement = formRef.current?.elements;
    if (formElement) {
      const newFormData: Record<string, unknown> = {}
      Array.from({
        length: formElement.length,
      }).forEach((element, idx) => {
        const current = formElement.item(idx);
        if (current) {
          switch (current.tagName) {
            case "INPUT":
            case "TEXTAREA":
            case "SELECT":
              const input =
                current as HTMLInputElement;
              newFormData[input.name] = input.value;
              break;

            default:
              break;
          }
        }
      });
      setFormData(newFormData)
    }
  }, []);
  const values = {
        ...contextValue,
        setValue: handleSetValue,
        getValue: handleGetValue,
      }
  return (
    <ContextForm.Provider
      value={values}>
      <form ref={formRef} onChange={handleOnChange}>{render(values)}</form>
    </ContextForm.Provider>
  );
}

export default Form;
