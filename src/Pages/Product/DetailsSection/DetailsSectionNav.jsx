import { useRef } from "react"
import { NavLink } from "react-router-dom"

const DetailsSectionNav = () => {
    // window.addEventListener("scroll", ()=> {
    //     let current = ""
    // })
    // const targetRef = useRef(null);

    // const scrollToTarget = () => {
    //   const offset = 170; // فاصله از بالای صفحه
    //   const elementPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
    //   console.log(elementPosition);
      
    //   const offsetPosition = elementPosition - offset;
    //   console.log(offsetPosition);
      
  
    //   window.scrollTo({
    //     top: offsetPosition,
    //     behavior: "smooth"
    //   });
    // };

  return (
    <div className="sticky lg:top-[169px] top-[136px] bg-white">
    <nav>
        <ul className="flex justify-evenly text-xs text-gray-600 lg:w-fit w-full border-transparent sticky z-50">
            <li className="p-2 border-b-4 border-rose-500 lg:w-fit flex-1 text-center text-nowrap border-transparent"><a href="#introduction">معرفی</a></li>
            <li className="p-2 border-b-4 lg:w-fit flex-1 text-center text-nowrap border-transparent"><a href="#introduction">بررسی تخصصی</a></li>
            <li className="p-2 border-b-4 lg:w-fit flex-1 text-center text-nowrap border-transparent"><a href="#details">مشخصات</a></li>
            <li className="p-2 border-b-4 lg:w-fit flex-1 text-center text-nowrap border-transparent"><a href="#opinions">دیدگاه‌ها</a></li>
            <li className="p-2 border-b-4 lg:w-fit flex-1 text-center text-nowrap border-transparent"><a href="#questions">پرسش‌ها</a></li>
            <NavLink/>
        </ul>
    </nav>
    <hr />
    {/* <div>
        <section className="pb-96 bg-pink-100" id="introduction">introduction</section>
        <section ref={targetRef} className="pb-96 bg-gray-100" id="professional">professional</section>
        <section className="pb-96 bg-pink-100" id="details">details</section>
        <section className="pb-96 bg-gray-100" id="opinions">opinions</section>
        <section className="pb-96 bg-pink-100" id="questions">questions</section>
    </div> */}
    </div>
  )
}

export default DetailsSectionNav