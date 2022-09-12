import { MaterialIcons } from "@expo/vector-icons";


export function MaterialIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
  size: number;
  style?: any;
}) {
  return <MaterialIcons {...props} />;
}