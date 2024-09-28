const AmazingSuggestion = () => {
    AmazingSuggestionP = [
        {"":""}
    ]
  return (
    <>
      <div className="w-full flex justify-center py-2">
        <div className="max-w-[1336px] w-full bg-red-500 rounded-2xl h-[300px] py-[20px] px-1 ">
          <div className="bg-gray-300 h-full">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={0}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper h-full"
            >
              {AmazingSuggestionP.map((elem) => {
                return (
                  <SwiperSlide className="w-fit h-full" key={elem.id}>
                    <AmazingSuggestionItems
                      text={elem.text}
                      img={elem.img}
                      status={elem.status}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmazingSuggestion;
