import { HasEnv } from "./env";
import { loader, Result } from "package-a/.emitted/loader";

export type Props = HasEnv;

export type Fn = (props: Props) => Promise<Result>;

export const fn: Fn = props => {
  const { env } = props;

  return loader(env);
}
