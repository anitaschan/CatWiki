import { useContext, useEffect } from "react";
import { Context } from "../context/store";
import doRequest from "../api/api";
import { storeAction } from "../context/actions/store";

const useDataUpload = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    (async () => {
      if (Object.keys(state).length === 0) {
        const data = await doRequest("breeds");
        storeAction(dispatch, data);
      }
    })();
  }, [dispatch]);
};

export default useDataUpload;
