import AuthDialog from "@/components/common/AuthDialog";
import useAuth from "@/hooks/useAuth";
import { Button } from "@base-ui/react";

const Navbar = () => {
  const authContext = useAuth();
  console.log(authContext);

  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 w-full h-14 p-2">
        <div>LOGO</div>
        <div>NavItems</div>
        <Button
          onClick={authContext?.openAuthDialog}
          className="border border-amber-400 p-2"
        >
          Login
        </Button>
      </div>
      <AuthDialog />
    </>
  );
};

export default Navbar;
