import {ethers} from "ethers"
export const useGetConnection=async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer =await  provider.getSigner();
    const address=await signer.getAddress();
   const connection={provider,signer,address};
//    console.log(connection)
   return connection;
}
export default useGetConnection;