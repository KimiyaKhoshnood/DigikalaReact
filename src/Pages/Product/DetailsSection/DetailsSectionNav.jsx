import { useRef } from "react"
import { NavLink } from "react-router-dom"

const DetailsSectionNav = () => {
    // window.addEventListener("scroll", ()=> {
    //     let current = ""
    // })
    const targetRef = useRef(null);

    const scrollToTarget = () => {
      const offset = 170; // فاصله از بالای صفحه
      const elementPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
      console.log(elementPosition);
      
      const offsetPosition = elementPosition - offset;
      console.log(offsetPosition);
      
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    };

  return (
    <>
    <nav>
        <ul className="flex text-xs text-gray-600 border-b-4 w-fit border-transparent sticky top-1 z-50">
            <li id="" className="p-2 border-b-4 w-fit border-transparent"><a href="#introduction">معرفی</a></li>
            <li onClick={scrollToTarget} className="p-2 border-b-4 w-fit border-transparent">بررسی تخصصی</li>
            <li className="p-2 border-b-4 w-fit border-transparent"><a href="#details">مشخصات</a></li>
            <li className="p-2 border-b-4 w-fit border-transparent"><a href="#opinions">دیدگاه‌ها</a></li>
            <li className="p-2 border-b-4 w-fit border-transparent"><a href="#questions">پرسش‌ها</a></li>
            <NavLink/>
        </ul>
    </nav>
    <hr />
    <div>
        <section className="pb-96 bg-pink-100" id="introduction">introduction</section>
        <section ref={targetRef} className="pb-96 bg-gray-100" id="professional">professional</section>
        <section className="pb-96 bg-pink-100" id="details">details</section>
        <section className="pb-96 bg-gray-100" id="opinions">opinions</section>
        <section className="pb-96 bg-pink-100" id="questions">questions</section>
    </div>
    </>
  )
}

export default DetailsSectionNav