import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent<React.PropsWithChildren<unknown>> = ({
  children,
}: Props) => {
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container
