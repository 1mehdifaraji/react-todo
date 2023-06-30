import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Layout, Loading, Error, Input, Status, Button } from "components";

interface TaskpageProps {}

const Taskpage: FC<TaskpageProps> = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const fetchTask = async (): Promise<Task> => {
    const { data } = await axios.get(`/tasks/${id}`);
    setTitle(data?.title);
    setDesc(data?.desc);
    setCompleted(data?.status);
    return data;
  };

  const { isLoading: mutationLoading, mutate } = useMutation(
    () =>
      axios
        .put(`/tasks/${id}`, { title, desc, status: completed })
        .then(({ data }) => data),
    {
      onSuccess: () => {
        queryClient
          .invalidateQueries({ queryKey: ["tasks"] })
          .then(() => navigate(-1));
      },
      onError: (e) => console.log(e),
    }
  );

  const {
    data: task,
    isLoading,
    isError,
  } = useQuery(["tasks"], () => fetchTask());

  return (
    <Layout title={task?.title}>
      <AnimatePresence>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          <div className="flex justify-center">
            <div className="w-3/4 md:w-1/2">
              <div>
                <label>Title</label>
                <Input
                  className="mt-1"
                  value={title}
                  onChange={({ target: { value } }) => setTitle(value)}
                />
              </div>
              <div className="mt-3">
                <label>Description</label>
                <Input
                  className="mt-1"
                  value={desc}
                  onChange={({ target: { value } }) => setDesc(value)}
                />
              </div>
              <div className="mt-3">
                <label>Status</label>
                <div className="flex space-x-2 justify-between mt-1">
                  <Status
                    handleClick={() => setCompleted(true)}
                    className={
                      completed
                        ? "border-green-300 text-green-400"
                        : "text-gray-500"
                    }
                  >
                    Completed
                  </Status>
                  <Status
                    handleClick={() => setCompleted(false)}
                    className={
                      !completed ? "border-red-300 text-black" : "text-gray-500"
                    }
                  >
                    Todo
                  </Status>
                </div>
              </div>
              <Button
                loading={mutationLoading}
                className="w-full mt-8"
                onClick={mutate}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Taskpage;
