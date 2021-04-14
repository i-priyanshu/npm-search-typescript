import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../states";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
