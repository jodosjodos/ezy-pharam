import { useAccountTypeStore } from "@/store";

const Layout = () => {
    const account = useAccountTypeStore.use.account();
   console.log('====================================');
   console.log(account);
   console.log('====================================');
};
export default Layout;
