import TopicWithRedLine from "../TopicWithRedLine/TopicWithRedLine"

const RelatedTags = () => {
  const RelatedTagsP = [
    {
        "text": "آیفون 13",
        "id": 1
    },{
        "text": "آیفون 13",
        "id": 2
    },
  ]
  return (
    <div className="w-full max-w-[1676px] p-4">
        <TopicWithRedLine title={"تگ‌های‌ مرتبط"}/>
        <div className="py-5 flex gap-2">
            {
            RelatedTagsP.map((elem)=>{
                return <span className="p-2 border rounded-3xl text-xs text-cyan-500">{elem.text}</span>
            })
            }
        </div>
    </div>
  )
}

export default RelatedTags