import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../useQueryParameters";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParamiter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParamiter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
