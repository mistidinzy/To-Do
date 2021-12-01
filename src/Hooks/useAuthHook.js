
export function AuthProvider(props){
  const [user, setUser] = useState(null)
}

async function login(loginData {
  console.log(loginData);

  const result = await fetch('${usersAPI}/Login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });
  const resultBody = await result.json();
});

function hasPermission(permission){
  if (!user) return false;

  if (!permission) return true;

  if (!user.permission) return false;

  return user.permission

}