export function activeNewBrand(newBrand: boolean) {
  if(newBrand) {
    document.body.dataset.brand = 'workleap';  
  
    const style = document.createElement('style');
    style.textContent = `
      [data-brand="workleap"] {
        --samoyed: #fff;
      
        --sapphire-50: #E6EBFF;
        --sapphire-400: #4767FE;
      
        --rock-800: #3C3C3C;
        --rock-400: #777775;
        
        --coastal-25: #F0F8FF;
      
        --neutral-surface: var(--samoyed);
        --neutral-text: var(--rock-800);
        --neutral-text-weak: var(--rock-400);
      
        --primary-surface: var(--sapphire-50);
        --primary-surface-strong: var(--sapphire-400);
      
        --information-surface: var(--coastal-25);
      
        --shape-rounded-sm: 4px;
        --shape-rounded-md: 8px;
        --shape-rounded-lg: 16px;

        --border-width: 1px;
      }
    `;
    document.head.appendChild(style);

  } else {
    delete document.body.dataset.flag;

    const style: HTMLStyleElement = document.head.getElementsByTagName('style')[0]
    style && style.remove();
 
  }
}