import Snackbar from "components/Snackbar";
import { useRef } from "react";

const SnackbarType = {
  success: "success",
  fail: "fail",
}

export default function Test() {
  const snackBarRef = useRef(null)
  return (
    <main className="container">
      <button className="btn-snackbar" onClick={() => {snackBarRef.current.show()}}>Show Snackbar</button>
      <Snackbar
        ref={snackBarRef}
        message="Email Success!!"
        type={SnackbarType.success} />
    </main>
  );
}
