let domainsFuc = (env) => {
    let domain, bucket, uri = location.host;
    if (uri.includes('test')) {
      domain = 'https://pretest.i31.com/AIR/CRM'
      bucket = ''
      
    } else {  
      domain = 'https://m.balpu.com/AIR/CRM';
      bucket = ''
    }
    // domain = 'https://pretest.i31.com/AIR/CRM'
    // domain = 'https://m.balpu.com/AIR/CRM';
    domain = 'http://192.168.21.222:8017/APi/'
    // domain = 'http://192.168.21.112:9001/APi/'
    // domain = 'http://www.wfjar.com:9001/APi/'
    // domain = 'http://192.168.21.112:8017/APi/'
    // domain = 'http://47.110.255.114:8017/APi/'
    // console.log("domain",domain)
    
    
    return {
      domain: domain,
      ossBucket: bucket,
      ossDomain: '', 
      
      ossRegion: "",
    }
  };
  export default domainsFuc
  