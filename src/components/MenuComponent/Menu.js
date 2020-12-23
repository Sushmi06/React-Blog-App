import MenuItem from './MenuItem'
function Menu(props){
    return(
        <>
         {props.menuList.map(item =>(
             <MenuItem key = {item.id} menuItem = {item} />
         )) }
         <hr />
        </>
    );
}


export default Menu;