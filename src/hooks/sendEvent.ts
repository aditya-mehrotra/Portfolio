const sendEvent = ({event,...params}: {event:string;[key:string]:any}) => {
  if (typeof window !== 'undefined') {
    if(!window?.dataLayer){
        window.dataLayer = [];
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...params,
      date: new Date()?.toISOString(),
    });
  }
}