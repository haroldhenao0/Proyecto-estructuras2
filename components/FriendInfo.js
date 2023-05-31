import Avatar from "./Avatar";

export default function FriendInfo() {
  return (
    <div className="flex gap-2">
      <Avatar />
      <div>
        <h3 className="font-bold text-xl">Harold Henao</h3>
        <h3 className="font-bold text-xl">Henry Losada</h3>
        <div className="text-sm leading-3">5 mutual friends</div>
      </div>
    </div>
  );
}