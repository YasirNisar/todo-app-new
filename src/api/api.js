const baseUrl = "http://localhost:5001/todos";

/* GET all todos */
export const fetchTodos = async () => {
  const res = await fetch(baseUrl);
  return res.json(); // ✅ RETURN
};

/* CREATE todo */
export const createTodos = async (todo) => {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  return res.json(); // ✅ RETURN created todo
};

/* UPDATE todo (partial update) */
export const updateTodos = async (id, todo) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "PATCH", // ✅ PATCH instead of PUT
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  return res.json(); // ✅ RETURN updated todo
};

/* DELETE todo */
export const deleteTodos = async (id) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};
