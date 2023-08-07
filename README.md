
## code improvment
instead of importing useContext and  Authcontext
ten using it as  const {setAuth}=useContext(AuthContext);
==>  create a cutom hook useAuth which returns useContext(AuthContext);
