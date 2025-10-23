import Icon from "../icons/Icon";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Icon style="filled" name="dashboard" size={48} className="text-blue-500" />
      <Icon style="linear" name="settings" size={48} className="stroke-gray-700" />
      <Icon style="filled" name="profile" size={48} className="text-green-500" />
      <Icon style="linear" name="notification" size={48} className="stroke-red-500" />
      <Icon style="filled" name="folder" size={48} className="text-yellow-500" />
    </div>
  );
}
