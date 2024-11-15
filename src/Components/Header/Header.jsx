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
import { Link } from "react-router-dom";

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
  // {
  //   title: "",
  //   items: ""
  // }
  let submenu = [
    {
      title: "موبایل",
      moreProductsLink: "همه محصولات موبایل",
      categories: [
        {
          title: "برند های گوشی موبایل",
          items: [
            "گوشی آیفون",
            "گوشی سامسونگ",
            "گوشی شیائومی",
            "گوشی نوکیا",
            "گوشی ریلمی",
            "گوشی آنر",
            "گوشی موتورولا",
            "گوشی ناتینگ فون",
            "گوشی جی پلاس",
            "گوشی هواوی",
            "گوشی جی ال ایکس",
            "گوشی های جنرال لوکس",
            "گوشی داریا",
            "گوشی گوگل",
            "گوشی اوپو",
            "گوشی ارد",
            "گوشی وان پلاس",
            "گوشی موبایل رنسو",
          ],
        },
        {
          title: "برندهای برتر",
          items: [
            "شیائومی",
            "سامسونگ",
            "اپل",
            "هواوی",
            "توشیبا",
            "تکنو",
            "ایرانسل",
            "مبین نت",
            "نینتندو",
            "بیتس",
            "جی بی ال",
            "وان مور",
            "تی پی لینک",
            "دی لینک",
            "کیو سی وای",
          ],
        },
        {
          title: "گوشی براساس قیمت",
          items: [
            "گوشی موبایل ارزان",
            "گوشی موبایل قسطی",
            "گوشی تا 2 میلیون تومان",
            "گوشی تا 5 میلیون تومان",
            "گوشی تا 7 میلیون تومان",
            "گوشی تا 15 میلیون تومان",
            "گوشی بالای 15 میلیون تومان",
          ],
        },
        {
          title: "گوشی براساس عملکرد",
          items: [
            "گوشی گیمینگ",
            "گوشی 5G",
            "گوشی دکمه ای",
            "گوشی ضد آب",
            "گوشی مناسب عکاسی",
            "گوشی میان رده",
            "گوشی اقتصادی",
            "گوشی دانش آموزی",
            "گوشی پرچمدار",
            "دو سیمکارت",
          ],
        },
        {
          title: "گوشی براساس حافظه داخلی",
          items: [
            "گوشی تا 16 گیگابایت",
            "گوشی تا 32 گیگابایت",
            "گوشی تا 64 گیگابایت",
            "گوشی تا 128 گیگابایت",
            "گوشی تا 256 گیگابایت",
            "گوشی تا 1 ترابایت",
          ],
        },
        {
          title: "رزولوشن عکس",
          items: [
            "گوشی تا 13 مگاپیکسل",
            "گوشی تا 16 مگاپیکسل",
            "گوشی تا 48 مگاپیکسل",
            "گوشی تا 64 مگاپیکسل",
            "گوشی تا 108 مگاپیکسل",
          ],
        },
        {
          title: "لوازم جانبی موبایل",
          items: [
            "شارژر گوشی",
            "قاب و کاور گوشی",
            "گلس گوشی",
            "هولدر گوشی موبایل",
            "کابل شارژ و مبدل",
            "پاوربانک (شارژر همراه)",
          ],
        },
        {
          title: "تبلت",
          items: [
            "تبلت سامسونگ",
            "تبلت اپل (آی پد)",
            "تبلت شیائومی",
            "تبلت لنوو",
            "تبلت مایکروسافت",
            "تبلت دانش آموزی",
          ],
        },
        {
          title: "هدفون",
          items: [
            "هدفون بی سیم",
            "هدفون اپل (ایرپاد)",
            "هدفون بیتس",
            "هدفون سونی",
            "هدفون سامسونگ (ایرپادز)",
            "هدفون شیائومی",
            "هدفون جی بی ال",
          ],
        },
        {
          title: "ساعت و مچ بند هوشمند",
          items: ["ساعت هوشمند سامسونگ", "ساعت هوشمند شیائومی", "اپل واچ"],
        },
        {
          title: "داغ ترین ها",
          items: [
            "گلکسی S23 Ultra",
            "گلکسی A54",
            "گلکسی A34",
            "گلکسی A24",
            "گلکسی A14",
            "گلکسی S23FE",
            "ردمی نوت 12",
            "پوکو C40",
            "پوکو X5 Pro 5G",
            "ردمی A2 Plus",
            "پوکو M5s",
            "آنر X9a",
            "موتورولا moto E13",
            "جی پلاس Q20s",
            "داریا باند 5G",
            "جدیدترین محصولات اپل",
          ],
        },
      ],
    },
    {
      title: "محصولات دیجیتال",
      moreProductsLink: "همه محصولات دیجیتال",
      categories: [
          {
            title: "لپ تاپ",
            items: [
              "لپ تاپ ایسوس",
              "لپ تاپ لنوو",
              "مک بوک",
              "لپ تاپ HP",
              "لپ تاپ دل",
              "لپ تاپ ایسر",
              "لپ تاپ ام اس آی",
              "لپ تاپ کاستوم",
            ],
          },
          {
            title: "اکسسوری های لب تاب",
            items: ["شارژر لپ تاپ", "کیف لپ تاپ", "کول پد", "استیکر لپ تاپ"],
          },
          {
            title: "کنسول گیمینگ",
            items: ["ps5", "xbox", "ps4"],
          },
          {
            title: "اکسسوری گیمینگ",
            items: ["دسته بازی", "فرمان بازی"],
          },

          {
            title: "هدفون",
            items: [
              "هدفون بی سیم",
              "هدفون اپل (ایرپاد)",
              "هدفون بیتس",
              "هدفون سونی",
              "هدفون سامسونگ (ایربادز)",
              "هدفون شیائومی",
              "هدفون جی بی ال",
              "هدفون ریزر",
            ],
          },
          {
            title: "ساعت هوشمند",
            items: [
              "ساعت هوشمند سامسونگ",
              "ساعت هوشمند شیائومی",
              "اپل واچ",
              "بند اپل واچ",
              "بند ساعت هوشمند",
              "لوازم جانبی ساعت هوشمند",
            ],
          },
          {
            title: "دوربین",
            items: [
              "دوربین فیلمبرداری",
              "دوربین کنون",
              "دوربین سونی",
              "دوربین چاپ سریع",
              "رینگ لایت",
              "پایه دوربین",
              "لنز دوربین",
              "کارت حافظه",
            ],
          },
          {
            title: "ذخیره سازی اطلاعات",
            items: ["هارد ssd", "هارد اینترنال", "هارد اکسترنال"],
          },
          { title: "فلش", items: ["فلش 256 گیگ", "فلش 128 گیگ", "فلش 64 گیگ"] },
          {
            title: "پاوربانک",
            items: [
              "فست شارژ",
              "پاوربانک شیائومی",
              "پاوربانک انکر",
              "پاوربانک اپل",
              "پاوربانک سامسونگ",
              "پاوربانک انرجایزر",
            ],
          },

          {
            title: "پرینتر",
            items: [
              "پرینتر سه بعدی",
              "پرینتر حرارتی",
              "پرینتر رنگی",
              "پرینتر لیبل زن",
              "پرینتر اچ پی",
            ],
          },
          {
            title: "ماشین های اداری",
            items: [
              "کابل پرینتر",
              "کارتریج",
              "اسکنر",
              "تلفن",
              "بارکدخوان",
              "ویدئو وال",
              "ویدئو پروژکتور",
              "دستگاه حضور و غیاب",
            ],
          },
          {
            title: "پرینتر",
            items: [
              "پرینتر سه بعدی",
              "پرینتر حرارتی",
              "پرینتر رنگی",
              "پرینتر لیبل زن",
              "پرینتر اچ پی",
            ],
          },
          {
            title: "پرینتر",
            items: [
              "پرینتر سه بعدی",
              "پرینتر حرارتی",
              "پرینتر رنگی",
              "پرینتر لیبل زن",
              "پرینتر اچ پی",
            ],
          },
          {
            title: "پرینتر",
            items: [
              "پرینتر سه بعدی",
              "پرینتر حرارتی",
              "پرینتر رنگی",
              "پرینتر لیبل زن",
              "پرینتر اچ پی",
            ],
          },

          {
            title: "تبلت",
            items: [],
          },
          {
            title: "خانه هوشمند",
            items: [],
          },
          {
            title: "برندهای برتر",
            items: [
              "شیائومی",
              "سامسونگ",
              "اپل",
              "هواوی",
              "توشیبا",
              "تکنو",
              "ایرانسل",
              "مبین نت",
              "نینتندو",
              "بیتس",
              "جی بی ال",
              "وان مور",
              "تی پی لینک",
              "دی لینک",
              "کیو سی وای",
            ],
          },
          {
            title: "داغ ترین ها",
            items: ["گیمینگ", "هدفون گربه ای", "فیفا"],
          },
      ],
    }
  ];

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
    <>
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
            <Link
              to={{
                pathname: "/login"
              }}
              href=""
              className="h-[40px] flex items-center gap-1 px-5 border border-gray-300 rounded-lg text-xs font-semibold"
            >
              <Icon
                icon={login}
                size={22}
                className="text-gray-600 -scale-x-100"
              />
              {header?.login?"خروج از حساب":"ورود | ثبت‌نام"}
            </Link>
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
        {header ? (
          <nav className="h-[40px] lg:flex hidden justify-between px-2">
            <div className="flex gap-2">
              <div
                id="submenu"
                className="border-b-2 border-b-transparent hover:border-b-red-500 transition-all duration-300 ease-linear origin-right"
              >
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
          </nav>
        ) : null}
        <hr />
      </header>

      <div className="hidden border w-[1000px] h-[70vh] m-2">
        <div className="overflow-y-scroll w-fit h-full">
          {submenu.map((elem) => {
            return <div className="py-2">{elem.title}</div>;
          })}
        </div>
        <div className="bg-blue-200 p-2 flex-1 flex">
          {
            submenu.map((eachSubject)=>{
              console.log("categ", eachSubject.categories);
              return <div className="p-2">{
                eachSubject.categories.map((e2)=>{
                  console.log(e2);
                  
                  return <div className="bg-red-400 w-fit">{e2.title}</div>
                })
              }</div>
              
            })
          }
        </div>
      </div>
    </>
  );
};

export default Header;
