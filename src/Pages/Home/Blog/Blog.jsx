import BlueLinkWithLeftArrow from "../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow";

const Blog = () => {
    const BlogP = [
        {"img":"https://www.digikala.com/mag/wp-content/uploads/2024/10/iphone16sale-1725627089.jpg", "text":"وزیر ارتباطات: مشکل رجیستری آیفون حل شد", "id":1},
        {"img":"https://www.digikala.com/mag/wp-content/uploads/2024/10/iphone16sale-1725627089.jpg", "text":"وزیر ارتباطات: مشکل رجیستری آیفون حل شد", "id":2},
        {"img":"https://www.digikala.com/mag/wp-content/uploads/2024/10/iphone16sale-1725627089.jpg", "text":"مدل ۲۰۲۴ نوکیا ۱۱۰ رونمایی شد؛ نوستالژیک با طراحی مدرن‌تر", "id":3},
        {"img":"https://www.digikala.com/mag/wp-content/uploads/2024/10/iphone16sale-1725627089.jpg", "text":"وزیر ارتباطات: مشکل رجیستری آیفون حل شد", "id":4},
    ]
  return (
    <div className="flex justify-center p-4">
      <div className="max-w-[1336px] w-full flex flex-col gap-3">
        <div className="flex justify-between items-center w-full px-5 py-2">
          <h5><strong>خواندنی‌ها</strong></h5>
          <BlueLinkWithLeftArrow text={"مطالب بیشتر در دیجی‌کالا مگ"} />
        </div>
        <div className="gap-4 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {BlogP?.map((elem) => {
            return <div className="border rounded-xl">
                <img src={elem.img} alt="" className="rounded-t-xl"/>
                <p className="text-xs leading-loose px-4 mt-2 mb-4">{elem.text}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
