import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import useAuth from "@/hooks/useAuth";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import VerifyEmail from "../VerifyEmail";

const AuthDialog = () => {
  const auth = useAuth();

  console.log(auth.authState.authMode);
  return (
    <Dialog
      open={auth?.authState?.authDialog}
      onOpenChange={auth?.closeAuthDialog}
    >
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{auth.authState.authMode}</DialogTitle>

          <DialogDescription>
            <Tabs
              onValueChange={(event) => auth.authModeChange(event)}
              defaultValue={auth?.authState?.authMode}
            >
              <TabsList>
                <TabsTrigger value="LOGIN">Login</TabsTrigger>
                <TabsTrigger value="SIGNUP">Signup</TabsTrigger>
              </TabsList>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
        <div>
          {auth.authState.authMode === "SIGNUP" ? (
            <SignupForm />
          ) : auth.authState.authMode === "VERIFY_EMAIL" ? (
            <VerifyEmail />
          ) : (
            <LoginForm />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
