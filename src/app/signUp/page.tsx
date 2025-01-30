import PublicComponent from "@/hoc/public";
import { lazy } from "react";

const SignUp = lazy(() => import("./index"));
function SignUpRoot() {
  return (
    <PublicComponent LazyComponent={SignUp}/>
  );
}

export default SignUpRoot;
