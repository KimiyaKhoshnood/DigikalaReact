import Icon from "react-icons-kit";
import { ic_search } from "react-icons-kit/md/ic_search";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { login } from "react-icons-kit/ikons/login";
import NavbarItems from "./NavbarItems";
import { bars } from "react-icons-kit/fa/bars";
import { ic_local_fire_department } from "react-icons-kit/md/ic_local_fire_department";
import { location } from "react-icons-kit/oct/location";
import { iosLocation } from "react-icons-kit/ionicons/iosLocation";
import { shoppingBasket } from "react-icons-kit/fa/shoppingBasket";
import { percent } from "react-icons-kit/fa/percent";
import { x } from "react-icons-kit/oct/x";
import { basket } from "react-icons-kit/ikons/basket";
import { tags } from "react-icons-kit/ikons/tags";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeader } from "../../Redux/Posts/HeaderReducer";

const Header = () => {
  let NavbarItemsP = {
    productSorting: {
      text: "دسته‌بندی کالاها",
      icon: bars,
      size: "text-md",
      id: 1,
    },
    digikalaPagesNavbar: [
      {
        text: "شگفت‌انگیزها",
        icon: bars,
        color: "text-gray-500",
        size: "text-xs",
        id: 2,
      },
      {
        text: "سوپرمارکت",
        icon: basket,
        color: "text-gray-500",
        size: "text-xs",
        id: 3,
      },
      {
        text: "کارت هدیه",
        icon: percent,
        color: "text-gray-500",
        size: "text-xs",
        id: 4,
      },
      {
        text: "پرفروش‌ترین‌ها",
        icon: ic_local_fire_department,
        color: "text-gray-500",
        size: "text-xs",
        id: 5,
      },
      {
        text: "تخفیف‌ها و پیشنهادها",
        icon: tags,
        color: "text-gray-500",
        size: "text-xs",
        id: 6,
      },
    ],
    digikalaQuestionsNavbar: [
      { text: "سوالی دارید؟", color: "text-gray-500", size: "text-xs", id: 7 },
      {
        text: "در دیجی‌کالا بفروشید!",
        color: "text-gray-500",
        size: "text-xs",
        id: 8,
      },
    ],
    locationNavbar: {
      text: "لطفا شهر خود را انتخاب کنید",
      color: "text-gray-800",
      icon: location,
      size: "text-xs",
    },
  };

  const { header, loading, error } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchHeader());
    }, 1000);
  }, []);
  


  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="">
        <a href="" className="w-full lg:h-[60px] h-[35px] block">
          <img
            className="h-full object-cover"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/2d75d44c81aa9afea6488551dab1a3725f2d6cee_1727184968.gif?x-oss-process=image"
            alt=""
          />
        </a>
      </div>
      <div className="h-[68px] lg:flex hidden items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <div>
            <img
              className="h-[30px]"
              src="https://www.digikala.com/brand/full-horizontal.svg"
              alt=""
            />
          </div>
          <div className="bg-[#F0F0F1] w-[600px] h-[44px] rounded-lg px-3">
            <Icon className="text-gray-400" icon={ic_search} size={27} />
            <input
              type="text"
              placeholder="جستجو"
              className="bg-transparent focus:outline-none h-full text-xs text-gray-500 pr-3"
            />
          </div>
        </div>
        <div className="flex items-center h-fit gap-4">
          <a
            href=""
            className="h-[40px] flex items-center gap-1 px-5 border border-gray-300 rounded-lg text-xs font-semibold"
          >
            <Icon
              icon={login}
              size={22}
              className="text-gray-600 -scale-x-100"
            />
            ورود | ثبت‌نام
          </a>
          <div className="w-[1px] bg-gray-400 h-[30px]"></div>
          <Icon
            icon={shoppingCart}
            size={25}
            className="text-gray-600 -scale-x-100"
          />
        </div>
      </div>
      <div className="px-3 flex lg:hidden flex-col gap-2 py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Icon icon={x} className="text-gray-500"></Icon>
            <img
              className="w-[32px] h-[32px]"
              src="https://www.digikala.com/statics/img/png/Logo.webp"
              alt=""
            />
            <span>اپلیکیشن دیجی‌کالا</span>
          </div>
          <a
            className="h-[36px] px-3 rounded-lg flex items-center bg-black text-white text-[12px]"
            href=""
          >
            نصب
          </a>
        </div>
        <div className="w-full h-[40px] bg-[#F0F0F1] rounded-3xl flex gap-2 items-center px-2">
          <Icon className="text-gray-400" icon={ic_search} size={27} />
          <span className="text-gray-400 text-sm">جستجو در </span>
          <img
            className="h-[16px]"
            src="https://www.digikala.com/brand/typography.svg"
            alt=""
          />
        </div>
      </div>
      {header?<nav className="h-[40px] lg:flex hidden justify-between px-2">
        <div className="flex gap-2">
          <div id="submenu" className="border-b-2 border-b-transparent hover:border-b-red-500 transition-all duration-300 ease-linear origin-right">
            <NavbarItems
              icon={NavbarItemsP?.productSorting.icon}
              text={header?.productSorting.text}
              size={"text-md"}
              color={header?.productSorting.color}
            />
          </div>
          <div className="text-gray-300 mt-2">|</div>
          <div className="flex">
            {NavbarItemsP?.digikalaPagesNavbar.map((elem, index) => {
              return (
                (index < 4 || width > 1280) && (
                  <div
                    key={index}
                    className="border-b-2 border-b-transparent hover:border-b-red-500 transition-all duration-300 ease-linear origin-right"
                  >
                    <NavbarItems
                      icon={elem.icon}
                      text={elem.text}
                      color={"text-gray-500"}
                      size={"text-xs"}
                    />
                  </div>
                )
              );
            })}
          </div>
          <div className="text-gray-300 mt-2">|</div>
          <div className="flex">
            {header?.digikalaQuestionsNavbar.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="border-b-2 border-b-transparent hover:border-b-red-500 transition-all duration-1000"
                >
                  <NavbarItems
                    icon={elem.icon}
                    text={elem.text}
                    color={"text-gray-500"}
                    size={"text-xs"}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <NavbarItems
            icon={NavbarItemsP?.locationNavbar.icon}
            text={header?.locationNavbar.text}
            size={"text-xs"}
            color={"text-gray-800"}
          />
        </div>
      </nav>:null}
      <hr />
    </header>
  );
};

export default Header;
