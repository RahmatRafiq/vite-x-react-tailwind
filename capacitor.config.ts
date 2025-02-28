import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sisfo.mobile',
  appName: 'My Stikes',
  webDir: 'dist',
    // server: {
  //   hostname:'192.168.189.171:8080',
  //   androidScheme: 'http',
  // },
  server: {
    cleartext: true, 
    allowNavigation: ["192.168.189.171"],
      androidScheme: "http",
  }
  
};

export default config;
