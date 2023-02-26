import { Button } from "common/components/Button";
import { TextInput } from "common/components/TextInput";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <div style={{ height: "5000px" }}>
      <TextInput
        styles="primary"
        type="text"
        placeholder="Primary ..."
        onChange={() => undefined}
        sx={{
          marginBottom: "1em",
        }}
      />
      <br />
      <TextInput
        styles="apple"
        type="text"
        placeholder="Apple ..."
        onChange={() => undefined}
        sx={{
          marginBottom: "1em",
        }}
      />
      <br />
      <TextInput
        styles="secondary"
        type="text"
        placeholder="Secondary ..."
        onChange={() => undefined}
        sx={{
          marginBottom: "1em",
        }}
      />
      <br />
      <Button color="secondary" type="submit" label="Click" variant="contained" />
    </div>
  );
};
