const SwipperImages = ({image}) => {
    return ( 
        <>
        <div className="flex h-full w-full px-2">
            <img className="object-cover lg:rounded-none rounded-2xl" src={image} alt="" />
        </div>
        </>
     );
}
 
export default SwipperImages;