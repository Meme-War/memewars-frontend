import m from "mithril";
import { cc } from "mithril-cc";
import { User, signOut } from "../../lib/auth";

type Attrs = {
  user: User;
};
export const UserHeader = cc<Attrs>(function () {
  return ({ user }) => {
    return (
      <div class="p-3 flex headerbg">
        <div>memewar.army</div>
        <div class="flex-1"></div>
        <div>
          <button
            onclick={async () => {
              await signOut();
              m.route.set("/sign-in");
            }}
          >
            {user.username}
          </button>
        </div>
      </div>
    );
  };
});
