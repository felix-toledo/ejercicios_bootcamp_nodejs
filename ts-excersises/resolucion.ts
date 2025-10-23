// interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }

// async function fetchAllPosts(): Promise<Post[]> {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         return res.ok ? res.json() : [];
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//         return [];
//       });
//     return response;
//   } catch (error) {
//     console.error("Error in fetchAllPosts:", error);
//     console.log("PERDON :(");
//     return [];
//   }
// }

// (async () => {
//   console.log((await fetchAllPosts()).at(2)?.title);
// })();

// ###########

interface ToDo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Profile {
  user: User;
  todos: ToDo[];
}

async function fetchUserWithId(userId: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("User not found");
  }
  const user = await response.json();
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  };
}

async function findUserTodos(userId: number): Promise<ToDo[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  if (!response.ok) {
    throw new Error("Todos not found");
  }
  const todos = await response.json();
  return todos.slice(0, 5);
}

async function fetchUserProfile(userId: number): Promise<Profile | null> {
  try {
    // const [user, todos] = await Promise.all([
    //   fetchUserWithId(userId),
    //   findUserTodos(userId),
    // ]);

    const results: Profile = await Promise.allSettled([
      fetchUserWithId(userId),
      findUserTodos(userId),
    ]).then((res) => {
      console.log("RES ", res);
      if (res[0].status !== "fulfilled") {
        throw new Error("Failed to fetch user");
      } else {
        const user: User = res[0].value;
        const todos: ToDo[] | null =
          res[1].status === "fulfilled" ? res[1].value : null;

        return { user, todos: todos || [] };
      }
    });

    // const profile: Profile = { user, todos };
    return results;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

(async () => {
  const userProfile: Profile | null = await fetchUserProfile(1);

  if (userProfile) {
    console.log(
      `El usuario ${userProfile.user.username} tiene ${userProfile.todos.length} tareas.`
    );
    // console.log("USER PROFILE ", userProfile);
  } else {
    console.log("No se encontró el perfil del usuario.");
  }
})();
