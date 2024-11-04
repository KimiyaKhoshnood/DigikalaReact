import Icon from "react-icons-kit";
import { headphones } from "react-icons-kit/feather/headphones";

const OnlineSupport = () => {
  return (
    <div className="bg-rose-500 w-[48px] h-[48px] rounded-full flex justify-center items-center fixed bottom-7 right-14 z-10">
        <Icon className="text-white" icon={headphones} size={22} />
    </div>
  )
}

export default OnlineSupport