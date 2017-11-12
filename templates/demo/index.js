import {
  NativeModules,
  NativeEventEmitter
} from 'react-native';
const rnswifttemplate_native = NativeModules.rnswifttemplate;

const rnswifttemplate = {
  nativeObj: rnswifttemplate_native,
  a: rnswifttemplate_native.a,
  b: rnswifttemplate_native.b,
  startTime: rnswifttemplate_native.startTime,
  addListener: (cb) => {
    const e = new NativeEventEmitter(rnswifttemplate_native); 
    const s = e.addListener("rnswifttemplate", cb); 
    return s;
  },
  addListenerDemo: () => {
    rnswifttemplate.addListener((arr)=> {
      console.log("Received a rnswifttemplate event", arr.message);
    })
  },
  emitMessage: (message, delayms) => {
    if(!delayms) delayms = 0;
    return rnswifttemplate_native.delayedSend(message, delayms);
  },
  demoWithVoid: (obj) => {
    //Note no point in returning since it is a void function - no promise! 
    rnswifttemplate_native.demoVoid(obj); 
  },
  demoWithPromise: (message) => {
    //Returns a promise!
    return rnswifttemplate_native.demo(message)
  }
}

export default rnswifttemplate
