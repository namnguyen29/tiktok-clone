import { AppTheme } from "./AppTheme";
import { FC } from "react";
import { RootRouting } from "routes/RootRouting";

export const App: FC = () => {
  return (
    <AppTheme>
      <RootRouting />
    </AppTheme>
  );
};
