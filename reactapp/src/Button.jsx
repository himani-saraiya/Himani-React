// text = string
// size = sm | md | lg | xl
// disabled = true | false
// loading = true | false => true => loading... disabled
// onClick => function



import React from 'react'

const getClassName = (size) => {
  switch (size) {
    case "sm":
      return "btn-sm"
      break

    case "md":
      return "btn-md"
      break

    case "lg":
      return "btn-lg"
      break

    case "xl":
      return "btn-xl"
      break

    default:
      return ""
  }
}

const Button = ({
  text = "",
  size = "md",
  isDisabled = false,
  isLoading = false,
  onClick = () => { }
}) => {
  return (
    <button
      disabled={isLoading || isDisabled}
      onClick={onClick}
      className={getClassName(size)}
    >
      {isLoading ? "Loading..." : text}
    </button>
  )
}

export default Button