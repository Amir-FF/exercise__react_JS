// import { useState } from "react";
import { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add, fetchUsers } from "../../redux/usersSlice";
import Loading from "../loading/Loading";

const FormRedux = () => {
  // codes

  const name = useRef(null);
  const email = useRef(null);

  // const users = useSelector((state) => state.users.users);
  // const loading = useSelector((state) => state.users.loading);
  // const error = useSelector((state) => state.users.error);

  const { users, loading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(add({ name: name.current.value, email: email.current.value }));
  };

  useEffect(() => {
    dispatch(fetchUsers(4));
  }, [dispatch]);

  return (
    <>
      <Form onSubmit={handleSubmit} className="col-md-8">
        <Form.Group className="d-flex gap-3 mb-3">
          <div className="w-50">
            <Form.Control
              ref={name}
              name="name"
              type="text"
              className="px-2 py-2 border-secondary-subtle rounded shadow-sm"
              required
            />
          </div>

          <div className="w-50">
            <Form.Control
              ref={email}
              name="email"
              type="text"
              className="px-2 py-2 border-secondary-subtle rounded shadow-sm"
              required
            />
          </div>

          <div className="flex-shrink-0">
            <Button
              type="submit"
              variant="primary"
              className="py-2 px-3 w-100 rounded"
            >
              Create User
            </Button>
          </div>
        </Form.Group>
      </Form>

      {loading && <Loading />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users &&
          users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
      </ul>
    </>
  );
};

export default FormRedux;
