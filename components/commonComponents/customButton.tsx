import {
  BookMarkIcon,
  ChevronIcon,
  ConsoleIcon,
  DangerIcon,
  InfoCircleIcon,
  LocationIcon,
  ShieldIcon,
  UsersIcon,
  WidgetsIcon,
} from "../icons"

interface ButtonProps {
  name: string
  onClickChange(): any
  isValue: boolean
}
const CustomButton: React.FC<ButtonProps> = ({
  name,
  onClickChange,
  isValue,
}) => {
  return (
    <button
      onClick={() => onClickChange()}
      className={`${
        isValue && "bg-[#C4CCF8] border rounded"
      } px-6 py-2 flex text-[#8A92A6] flex-row gap-x-4 w-full`}
    >
      {name === "Example" ? (
        <ConsoleIcon />
      ) : name == "Widgets" ? (
        <WidgetsIcon />
      ) : name === "Maps" ? (
        <LocationIcon />
      ) : name === "Authentication" ? (
        <ShieldIcon />
      ) : name === "Users" ? (
        <UsersIcon />
      ) : name === "Error 404" ? (
        <InfoCircleIcon />
      ) : name === "Error 505" ? (
        <DangerIcon />
      ) : (
        <BookMarkIcon />
      )}
      {name}
      {name !== "Error 404" &&
        name !== "Error 505" &&
        name !== "Maintainence" && <ChevronIcon />}
    </button>
  )
}

export default CustomButton
