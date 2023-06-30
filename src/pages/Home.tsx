import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import {
  Button,
  Error,
  Layout,
  Loading,
  Modal,
  Task,
  Notfound,
} from "components";

const Homepage: FC = () => {
  const queryClient = useQueryClient();

  const [deleteTaskModal, setDeleteTaskModal] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const fetchTasks = async (): Promise<Task[]> => {
    const { data } = await axios.get(`/tasks`);
    return data;
  };

  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery(["tasks"], () => fetchTasks());

  const { isLoading: mutationLoading, mutate } = useMutation(
    () => axios.delete(`/tasks/${id}`).then(({ data }) => data),
    {
      onSuccess: () => {
        queryClient
          .invalidateQueries({ queryKey: ["tasks"] })
          .then(() => setDeleteTaskModal(false));
      },
      onError: (e) => console.log(e),
    }
  );

  return (
    <Layout title="Home">
      <Modal
        title={"Delete task"}
        isOpen={deleteTaskModal}
        onClose={() => setDeleteTaskModal(false)}
      >
        <div className="text-center">
          Are you sure you want to delete task ?
        </div>
        <div className="flex items-center space-x-2 mt-6 mx-10">
          <Button
            danger
            className="w-full"
            onClick={() => {
              setId(id);
              mutate();
            }}
            loading={mutationLoading}
          >
            Delete
          </Button>
          <Button className="w-full" onClick={() => setDeleteTaskModal(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
      <AnimatePresence>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : tasks?.length > 0 ? (
          tasks?.map(({ desc, id, status, title }, index) => {
            return (
              <Task
                key={id}
                onDelete={() => {
                  setId(id);
                  setDeleteTaskModal(true);
                }}
                index={index}
                desc={desc}
                status={status}
                id={id}
                title={title}
              />
            );
          })
        ) : (
          <Notfound />
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Homepage;
