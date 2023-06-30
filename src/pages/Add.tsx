import { FC, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { v4 as uuid } from "uuid";
import axios from "axios";

import { Button, Error, Input, Layout, Status } from "components";

const Addtaskpage: FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const {
    isLoading: mutationLoading,
    mutate,
    data: mutateData,
    isError,
  } = useMutation(
    () =>
      axios
        .post(`/tasks`, { title, desc, status: completed, id: uuid() })
        .then(({ data }) => data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        navigate(-1);
      },
      onError: (e) => console.log(e),
    }
  );

  return (
    <Layout title="Add new task">
      <AnimatePresence>
        {isError ? (
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
                Add new task
              </Button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Addtaskpage;
