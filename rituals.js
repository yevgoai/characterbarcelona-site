'use strict';
(() => {
  const collection=document.getElementById('catalog-dialog');
  const search=document.getElementById('catalog-search');
  const grid=collection.querySelector('.catalog-grid');
  const status=collection.querySelector('.catalog-status');
  const more=collection.querySelector('.catalog-more');
  const retry=collection.querySelector('.catalog-retry');
  const reset=collection.querySelector('.catalog-reset');
  const categoryKeys={hair:'catalogHair',beard:'catalogBeard',skin:'catalogSkin',body:'catalogBody',fragrance:'catalogFragrance',sets:'catalogSets'};
  let products=null,request=null,category='all',visibleCount=12,wantedProduct='';
  const copy=()=>translations[language];
  const normalize=value=>value.normalize('NFKD').replace(/\p{Diacritic}/gu,'').toLocaleLowerCase().trim();
  function node(tag,classes,text){const element=document.createElement(tag);if(classes)element.className=classes;if(text!==undefined)element.textContent=text;return element;}
  function labels(){document.querySelectorAll('[data-alt-t]').forEach(image=>image.alt=copy()[image.dataset.altT]);if(products&&collection.open)render();}
  function render(){
    if(!products)return;
    const text=copy(),query=normalize(search.value);
    const filtered=products.filter(product=>(category==='all'||product.category===category)&&(!query||normalize(product.name+' '+product.descriptions[language]+' '+text[categoryKeys[product.category]]).includes(query)));
    collection.querySelectorAll('[data-category]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category===category)));
    const cards=filtered.slice(0,visibleCount).map(product=>{
      const card=node('article','catalog-product');
      const image=node('img');image.src='/'+product.image.replace(/^\//,'');image.alt='Bullfrog '+product.name;image.width=640;image.height=640;image.loading='lazy';image.decoding='async';
      const visual=node('div','catalog-product-visual');visual.append(image);
      const kind=node('span','catalog-kind',text[categoryKeys[product.category]]);
      const name=node('h3','',product.name);
      const description=node('p','catalog-description',product.descriptions[language]);
      const size=node('span','catalog-sizes',product.sizes.join(' · '));
      card.append(visual,kind,name,description,size);return card;
    });
    grid.replaceChildren(...cards);
    status.textContent=filtered.length?filtered.length+' '+text.catalogCount:text.catalogEmpty;
    more.hidden=filtered.length<=visibleCount;reset.hidden=filtered.length>0;retry.hidden=true;
  }
  async function load(){
    if(products)return products;
    if(!request)request=fetch('/bullfrog-catalog.json?v=character-selection-1',{cache:'no-cache'}).then(response=>{if(!response.ok)throw Error('catalog');return response.json();}).then(data=>{products=data.products;return products;}).catch(error=>{request=null;throw error;});
    return request;
  }
  async function populate(){
    status.textContent=copy().catalogLoading;retry.hidden=true;
    try{
      await load();
      const chosen=products.find(product=>product.handle===wantedProduct);
      if(chosen)search.value=chosen.name;
      wantedProduct='';render();collection.scrollTop=0;
    }catch{status.textContent=copy().catalogError;retry.hidden=false;}
  }
  document.querySelectorAll('[data-open-catalog]').forEach(button=>button.addEventListener('click',()=>{
    wantedProduct=button.dataset.openCatalog;category='all';visibleCount=12;search.value='';grid.replaceChildren();more.hidden=true;reset.hidden=true;
    collection.showModal();document.documentElement.classList.add('has-catalog');populate();
  }));
  collection.addEventListener('close',()=>document.documentElement.classList.remove('has-catalog'));
  collection.addEventListener('click',event=>{if(event.target!==collection)return;const b=collection.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)collection.close();});
  collection.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;visibleCount=12;render();}));
  search.addEventListener('input',()=>{visibleCount=12;render();});
  more.addEventListener('click',()=>{visibleCount+=12;render();});
  retry.addEventListener('click',populate);
  reset.addEventListener('click',()=>{category='all';search.value='';visibleCount=12;render();search.focus();});
  document.addEventListener('character-language',labels);labels();
})();
