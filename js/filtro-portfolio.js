const d = document;
export default function filtersPortfolio(buttons, items) {
    const $buttons = d.querySelectorAll(buttons),
        $items = d.querySelectorAll(items);
        //console.log($items)
   
    $buttons.forEach(button => {
        d.addEventListener("click", e =>{
            if(e.target === button){
              $items.forEach((item) =>{
                if(item.getAttribute('data-project') == e.target.textContent){
                   item.classList.add('filter');
                }else{
                    item.classList.remove('filter');
                }
              });
            }
        });
    })  
}

