import 

export default function Auth(props{
  const {hasPermissions} = useAuth();
  const {permission, children} = props;

  if (hasPermissions(permission))
  return children;

  return null;
})