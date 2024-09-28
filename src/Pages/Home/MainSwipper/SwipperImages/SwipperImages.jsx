const SwipperImages = ({image}) => {
    return ( 
        <>
        <div className="flex h-full w-full">
            <img className="object-cover" src={image} alt="" />
        </div>
        </>
     );
}
 
export default SwipperImages;