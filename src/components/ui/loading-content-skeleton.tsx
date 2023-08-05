import { Skeleton } from "./skeleton";
import { motion } from 'framer-motion'

export function LoadingContentSkeleton() : JSX.Element
{

    return (
        <div className="flex flex-col w-full px-14 m-40 gap-3">
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.5
                }}
            >
                <Skeleton className="w-32 h-6" />
            </motion.div>
    
            <div className="flex flex-row gap-1">
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <Skeleton className="w-52 h-28" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    <Skeleton className="w-52 h-28" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 2
                    }}
                >
                    <Skeleton className="w-52 h-28" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 3
                    }}
                >
                    <Skeleton className="w-52 h-28" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 4
                    }}
                >
                    <Skeleton className="w-52 h-28" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 5
                    }}
                >
                    <Skeleton className="w-52 h-28" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 6
                    }}
                >
                    <Skeleton className="w-52 h-28" />
                </motion.div>
            </div>
        </div>
    );
}