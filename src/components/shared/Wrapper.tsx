import { FC } from "react"

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Wrapper
